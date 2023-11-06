import * as Yup from "yup";

// VALIDATION FOR BOOK FORM
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("الإسم مطلوب")
    .min(2, "يجب أن يحتوي الإسم على الأقل على حرفين"),

  phoneNumber: Yup.string()
    .matches(/^(01)[0-9]{9}$/, "رقم الهاتف غير صحيح")
    .required("رقم الهاتف مطلوب"),

  occasionDate: Yup.date()
    .required("تاريخ المناسبة مطلوب")
    .min(new Date(), "يجب أن يكون التاريخ في المستقبل"),

  occasionType: Yup.string().required("نوع المناسبة مطلوب"),

  amountOfPeople: Yup.number()
    .integer("يجب أن يكون عدد صحيح")
    .min(1, "عدد الأفراد يجب أن يكون أكبر من أو يساوي 1")
    .required("عدد الأفراد مطلوب"),

  // img: Yup.mixed()
  //   .notRequired()
  //   .test(
  //     "fileSize",
  //     "حجم الملف كبير جدًا",
  //     (value) => value && value.size <= 1024 * 1024 // Adjust the file size limit (1MB)
  //   )
  //   .test(
  //     "fileType",
  //     "يجب أن يكون الملف من نوع صورة",
  //     (value) => value && value.type.startsWith("image/")
  //   ),
});

export default validationSchema;
