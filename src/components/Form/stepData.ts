import { StepData } from "../../types/StepData"

export const stepData: StepData = {
  "1": {
    title: "Personal info",
    subTitle: "Please provide your name, email address, and phone number",
    rows: [
      {
        rowId: "1",
        fields: [
          {
            type: "textfield",
            label: "Name",
            name: "name",
            validation: null,
            placeholder: "",
            errorMessage: "This field is required",
            required: true,
          },
        ],
      },
      {
        rowId: "2",
        fields: [
          {
            type: "textfield",
            label: "Email Address",
            name: "email",
            validation: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
            placeholder: "",
            errorMessage: "This field is required",
            required: true,
          },
        ],
      },
      {
        rowId: "3",
        fields: [
          {
            type: "textfield",
            label: "Phone Number",
            name: "phone",
            validation: "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$",
            placeholder: "e.g. +1 234 567 890",
            errorMessage: "This field is required",
            required: true,
          },
        ],
      },
    ],
  },
  "2": {
    title: "Select your plan",
    subTitle: "You have the option of monthly or yearly billing",
    rows: [
      {
        rowId: "1",
        fields: [
          {
            errorMessage: "",
            label: "",
            name: "Arcade",
            placeholder: "",
            required: true,
            type: "plan",
            validation: "",
          },
          {
            errorMessage: "",
            label: "",
            name: "Advanced",
            placeholder: "",
            required: true,
            type: "plan",
            validation: "",
          },
          {
            errorMessage: "",
            label: "",
            name: "Pro",
            placeholder: "",
            required: true,
            type: "plan",
            validation: "",
          },
        ],
      },
    ],
  },
}
