import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';
import {useEffect} from "react";

import {carValidator} from "../../validators";
import {carService} from "../../services";
import {object} from "joi";


const CarForm = ({setCars, carUpdate,setCarUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all'
    });



    useEffect(() => {
        if (carUpdate) {
            setValue('model', carUpdate.model,{shouldValidate:true})
            setValue('price', carUpdate.price,{shouldValidate:true})
            setValue('year', carUpdate.year,{shouldValidate:true})
        }

    }, [carUpdate, setValue])

    const submit = async (car) => {
        if (carUpdate) {
            const {data} = await carService.updateById(carUpdate.id, car);
            setCars(cars => {
                const find = cars.find(value => value.id === data.id);
                    Object.assign(find, data)
                return [...cars];
            })
            setCarUpdate(null);
            reset();
        } else {
            const {data} = await carService.create(car);
            setCars(cars => [...cars, data])
            reset();
        }
    };
    return (
        // <form onSubmit={handleSubmit(submit)} onChange={()=> console.log(errors)}>
        //     <input type="text" placeholder={'model'} {...register('model', {required:true, minLength:{value:2, message:'min 2 ch'}})}/>
        //     {errors.model&&<span>{errors.model.message}</span>}
        //     <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
        //     <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
        //     <button disabled={!isValid}>Save</button>
        // </form>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            {/*<input type="text" placeholder={'engine'} {...register('property.engine', {valueAsNumber: true})}/>*/}
            {/*<input type="text" placeholder={'wheels'} {...register('property.wheels', {valueAsNumber: true})}/>*/}
            <button disabled={!isValid}>{carUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export {CarForm};