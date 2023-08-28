import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { HIDE } from "../redux/reducers";

export default function Form({ handleAddNotification }) {
    const dispatch = useDispatch();
    const { register,
        handleSubmit,
        formState: { errors } } = useForm();

    const onSubmit = (data) => {
        handleAddNotification(data);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-xxl gap-3 bg-white border-2 border-cyan-300 px-10 py-6 child:outline-none child:border-b-2 child:p-2 child:border-b-cyan-300"
        >
            <h1 className="text-center font-extrabold text-cyan-700 text-3xl pb-5 beaf:content-normal beaf:w-5 beaf:h-5 beaf:bg-cyan-300">Registration Form</h1>
            <button
                onClick={() => dispatch(HIDE())}
                className=" absolute top-3 right-3 p-3 font-extrabold text-cyan-600"
                type="button">
                X
            </button>
            <input
                placeholder="Name"
                type="text"
                style={ errors.name && { borderColor: "red" } }
                {...register("name", { required: true, maxLength: 12 })} />
            <input
                placeholder="Email Address"
                type="email"
                style={ errors.email && { borderColor: "red" } }
                {...register("email", { required: true })} />
            <input
                placeholder="Country"
                type="text"
                style={ errors.country && { borderColor: "red" } }
                {...register("country", { required: true })} />
            <input
                placeholder="Phone"
                type="number"
                style={ errors.phone && { borderColor: "red" } }
                {...register("phone", { required: true })} />
            <input
                placeholder="Password"
                type="password"
                style={ errors.password && { borderColor: "red" } }
                {...register("password", { required: true })} />
            <label className=" select-none cursor-pointer">
                <input
                    className="mr-1"
                    type="checkbox" /> I accept terms & conditions
            </label>
            <button className=" bg-gradient-to-tr p-2 rounded-full text-white font-extrabold">Submit</button>
            <p className=" text-center">Already hane an account?
                <a href="#" className=" text-blue-700 ms-1">Sign In</a>
            </p>
        </form>
    )
};