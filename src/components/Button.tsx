"use client";

interface IButtonProps{
    onClick?:() => void;
    className?: string;
    children?: React.ReactNode;
}

export default function Button({
    onClick,
    className="",
    children
}: IButtonProps){
    return (
    <button
        onClick={onClick}
        className={className}
        >
        {children}
    </button>
    )
}