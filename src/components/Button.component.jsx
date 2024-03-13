const BUTTON_TYPE_IMAGES = {
    google: "/src/assets/Google_Icons-09-512.webp",
    facebook: "/src/assets/Facebook_logo.png"
}

const Button = ({children, buttonType, onClick}) => {
    return (
        <button className="flex items-center gap-5 border-2 p-3 mx-5 rounded-3xl hover:text-black hover:bg-white"  onClick={onClick}>
            <img src={BUTTON_TYPE_IMAGES[buttonType]} className="w-7 m-2" alt=""/>
            {children}
        </button>
    )
}

export default Button