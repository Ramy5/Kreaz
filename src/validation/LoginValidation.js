import * as Yup from "yup";

// VALIDATION FOR login
const LoginValidation = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^(01)[0-9]{9}$/, "رقم الهاتف غير صحيح")
    .required("رقم الهاتف مطلوب"),

  password: Yup.string()
    .required("كلمة المرور مطلوبة")
    .min(6, "يجب أن تكون كلمة المرور على الأقل 6 أحرف"),
});

export default LoginValidation;
