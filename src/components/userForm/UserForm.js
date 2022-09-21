import {useForm} from "react-hook-form";

import {userService} from "../../services";

const UserForm = ({setUsers}) => {

    const {register, reset,handleSubmit, formState: {errors, isValid}} = useForm(
        {
            mode: 'all',
            defaultValues: {
                name: 'name',
                username: 'username',
                email: 'example@gmail.com'
            }
        }
    );

    const submit = (obj) => {
        userService.create(obj).then(({data}) => setUsers(users => [...users,data]))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' {...register('name', {required: {value:true,message: 'Field is required'}})}/>
            {
                errors.name && <span>{errors.name.message}</span>
            }
            <input type='text' {...register('username')}/>
            <input type='text' {...register('email')}/>
            <button disabled={!isValid}>Save</button>
        </form>
    )
}
export {UserForm};