import { Fragment } from "react";
import SubNotification from "./subNotification";

export default function Notification({ profile }) {


    return (
        <Fragment key={profile.id}>
            <div className=" flex items-center gap-x-3 px-1 py-3">
                <img
                    src={profile.img}
                    className=" max-w-ext row-span-2"
                    alt={profile.name + " Image"}
                />
                <SubNotification profile={profile} />
            </div>
            {
                profile.type == "messaged"
                &&
                <fieldset className=" border-2 border-gray-200 rounded-md p-5 ms-12">
                    {profile.target}
                </fieldset>
            }
        </Fragment>
    )
};
