type PropsType = {
    text: string
}

function Header(props: PropsType) {
    return (
        <div className="alert alert-primary text-center" role="alert">
            {props.text}
        </div>
    );
}

export default Header;