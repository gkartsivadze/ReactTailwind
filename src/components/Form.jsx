import { useForm } from "react-hook-form"

export default function Form({ handleAddNotification }) {
    const { register,
            handleSubmit,
            formState: { errors } } = useForm();

    const onSubmit = (data) => {
        handleAddNotification(data)
    }
    
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" grid grid-cols-2 gap-3 max-w-2xl mx-auto bg-gray-300 p-3"
        >
            <label>
                Name
            <input className="ms-3" {...register("name", { required: true, maxLength: 12 })} />
            </label>
            <label>
                Lastname
            <input className="ms-3" {...register("message", { required: true })} />
            </label>
            <button className=" col-span-2 bg-blue-100">Submit</button>
            {
                errors.name && "Enter correct name"
            }
        </form>
    )
};