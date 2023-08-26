export default function Header({ handleClick }) {
    return (
        <div className="flex justify-between align-top py-4">
            <h1 className="font-black">Notifications</h1><span className="bg-indigo-900 text-white ms-1 me-auto px-2 rounded">3</span>
            <button onClick={handleClick} className="text-gray-500 hover:text-gray-700">Mark all as read</button>
        </div>
    )
};