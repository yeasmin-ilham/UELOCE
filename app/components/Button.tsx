

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({text , onClick}:ButtonProps){
    return(
      <div>
            <button
            className="self-start bg-primary text-secondary font-bold tracking-tight
             uppercase text-2xl px-4 py-3 font-jaro rounded-md cursor-pointer hover:text-primary 
             hover:bg-secondary hover:border-2 transition-all duration-300"
           
           onClick={onClick}>
            {text}
          </button>
      </div>  
    )
}



/* import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const variantStyles = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
};

const sizeStyles = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-xl font-medium transition-all duration-200
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button; */