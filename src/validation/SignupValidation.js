import * as Yup from "yup";

// Define validation schema using Yup
export const SignupValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, "يجب أن يكون الاسم على الأقل من حرفين")
    .max(50, "الاسم يجب أن يحتوي على 50 حرف كحد أقصى")
    .required("الرجاء إدخال الاسم"),
  email: Yup.string()
    .email("البريد الإلكتروني غير صالح")
    .required("الرجاء إدخال البريد الإلكتروني"),
  phoneNumber: Yup.string()
    .matches(
      /^(\+?\d{1,4}[\s-]?)?(?!0+\s+,?$)\d{10}\s*$/,
      "الرجاء إدخال رقم هاتف صحيح"
    )
    .required("الرجاء إدخال رقم المحمول"),
  city: Yup.string().required("الرجاء إدخال المدينة"),
  password: Yup.string()
    .min(6, "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل")
    .required("الرجاء إدخال كلمة المرور"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "يجب أن تتطابق كلمة المرور")
    .required("الرجاء إعادة إدخال كلمة المرور"),
});
