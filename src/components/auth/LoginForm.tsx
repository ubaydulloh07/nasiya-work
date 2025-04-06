// import { useForm } from "react-hook-form";
// import { useState, useEffect } from "react";
// import useAuth from "../../hooks/useAuth";
// import { Input, Button } from "antd";
// import "../../styles/pages/LoginPage.scss";

// type LoginData = {
//     login: string;
//     hashed_password: string;
// };

// const LoginForm = () => {
//     const { register, handleSubmit, watch } = useForm<LoginData>();
//     const [isBlocked, setIsBlocked] = useState(false);
//     const [blockTime, setBlockTime] = useState(0);
//     const { loginMutation } = useAuth();

//     const login = watch("login");
//     const hashed_password = watch("hashed_password");
//     const isFormFilled = login && hashed_password;

//     useEffect(() => {
//         if (blockTime > 0) {
//             let timer: ReturnType<typeof setTimeout>;
//             timer = setTimeout(() => {
//                 setBlockTime((prev) => prev - 1);
//             }, 1000);

//             return () => clearTimeout(timer);
//         } else {
//             setIsBlocked(false);
//         }
//     }, [blockTime]);

//     const onSubmit = async (data: LoginData) => {
//         try {
//             await loginMutation.mutateAsync(data);
//         } catch (error) {
//             console.error("Login error:", error);
//             setIsBlocked(true);
//             setBlockTime(30);
//         }
//     };

//     return (<div>



//         <form onSubmit={handleSubmit(onSubmit)} className="login-form">
//             <div className="form-group">
//                 <label>Login</label>
//                 <Input
//                     {...register("login")}
//                     placeholder="Loginni kiriting"
//                     disabled={isBlocked}
//                 />
//             </div>
//             <div className="form-group">
//                 <label>Parol</label>
//                 <Input.Password
//                     {...register("hashed_password")}
//                     placeholder="Parolni kiriting"
//                     disabled={isBlocked}
//                 />
//             </div>
//             {isBlocked && (
//                 <div className="block-message">
//                     Bloklangan vaqt: {blockTime} soniya
//                 </div>
//             )}
//             <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="login-button"
//                 disabled={!isFormFilled || isBlocked || loginMutation.isLoading}
//             >
//                 {loginMutation.isLoading ? "Kirish..." : "Kirish"}
//             </Button>
//         </form>
//     </div>
//     );
// };

// export default LoginForm;


import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Eye, EyeOff } from "lucide-react";
import { Modal,  message } from "antd";

type LoginFormData = {
    login: string;
    hashed_password: string;
};

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<LoginFormData>();
    const { loginMutation } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
  
    
    const [isBlocked, setIsBlocked] = useState(false);
    const [isBlockedModalOpen, setIsBlockedModalOpen] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);

    const login = watch("login", "smart");
    const hashed_password = watch("hashed_password", "ubaydulloh");
    const isFormFilled = login.trim() !== "" || hashed_password.trim() !== "";

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isBlocked) {
            setIsBlockedModalOpen(true);
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev === 1) {
                        clearInterval(timer);
                        setIsBlocked(false);
                        setAttempts(0);
                        setTimeLeft(30);
                        setIsBlockedModalOpen(false);
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isBlocked]);

    const onSubmit = (data: LoginFormData) => {
        if (isBlocked) return;

        loginMutation.mutate(data, {
            onError: () => {
                setAttempts((prev) => {
                    if (prev + 1 >= 3) {
                        setIsBlocked(true);
                        message.error("Ko'p urinishlar! 30 soniya kuting.");
                        return 3;
                    }
                    message.error("Login yoki parol noto'g'ri");
                    return prev + 1;
                });
            },
            onSuccess: () => {
                setAttempts(0);
            }
        });
    };

    return (
        <div className='loginContainer'>
         
            <div className='loginbox'>
                <div className="loginForm">
                    <img className="loginLogo" src="/imgs/LOGO.svg" alt="" />
                    <h2>Saytga kirish</h2>
                    <p>Iltimos, tizimga kirish uchun login va parolingizni kiriting.</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='inputGroup'>
                            <label>Login</label>
                            <input
                                type="text"
                                {...register("login", { required: "Login majburiy" })}
                                placeholder="Loginni kiriting"
                                className={errors.login ? 'inputError' : ""}
                            />
                            
                            {errors.login && <p className='errorMessage'>{errors.login.message}</p>}
                        </div>

                        <div className='inputGroup'>
                            <label>Parol</label>
                            <div className='passwordWrapper'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("hashed_password", { required: "Parol majburiy" })}
                                    placeholder="Parolni kiriting"
                                    className={errors.hashed_password ? 'inputError' : ""}
                                />
                                <button type="button" className='eyeIcon' onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                               
                            </div>
                            {errors.hashed_password && <p className='errorMessage'>{errors.hashed_password.message}</p>}
                        </div>

                        <div className='loginInfo'>
                            <p>Urinishlar soni: {attempts}/3</p>
                            <button type="button" className='forgotPassword'>
                                Parolingizni unutdingizmi?
                            </button>
                        </div>
                        <button
                            type="submit"
                            className={`loginButton ${!isFormFilled || isBlocked ? 'disabledButton' : ''}`}
                            
                        >
                            kirish
                        </button>
                    </form>

                   
                </div>
            </div>

           

            <Modal
            
                open={isBlockedModalOpen}
                footer={null}
                closable={false}
            >
                <p>Iltimos, {timeLeft} keyin qayta urinib ko'ring.</p>
            </Modal>


            <img className="login-img" src="./login-img.png" alt="" />
        </div>
    );
};

export default LoginForm;
