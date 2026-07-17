
const AskQuestionsBadge = ({ name = "Diyor", avatarSrc = " " }) => {
    return (
        <div className="flex items-center gap-10">
            <div className="text-start">
                <p className="text-sm text-gray-500">Questions?</p>
                <p className="text-lg font-bold text-teal-600">Ask {name}</p>
            </div>
            <img
                src={avatarSrc}
                alt={name}
                className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md"
            />
        </div>
    );
};

export default AskQuestionsBadge;