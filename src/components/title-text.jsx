const TitleText = ({ title, actionText, children }) => <div className="flex justify-between">
    <div className="flex items-center text-2xl font-bold">
        <div className="mr-2">
            {title}
        </div>
        <div>
            {children}
        </div>
    </div>
    <div>{actionText}</div>
</div>

export default TitleText;