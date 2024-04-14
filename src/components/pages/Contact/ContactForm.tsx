"use client";
import { Input } from "@/components/ui/input";
import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

const ContactForm = () => {
  return (
    <div className=" p-4 bg-white border shadow-lg rounded-2xl w-full ">
      <Formik
        initialValues={{ name: "", email: "", phone: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Required")
            .min(3, "Must be at least 3 characters"),

          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          phone: Yup.string().required("Required"),
          // .matches(
          //   /^(?:\+?234)?[0-9]{11}$/,
          //   "Phone number must be 11 digits long"
          // )
          message: Yup.string().required("Required"),
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            actions.resetForm();
          }, 4000);
        }}
      >
        {(props) => (
          <form
            className=" flex flex-col gap-6 py-4 "
            onSubmit={props.handleSubmit}
          >
            {/* Name */}
            <div className=" w-full flex flex-col gap-2 ">
              <label className=" font-medium " htmlFor="name">
                Name
              </label>
              <Input
                id="name"
                className=" bg-white "
                type="text"
                placeholder="Enter your name"
                {...props.getFieldProps("name")}
              />
              {props.touched.name && props.errors.name && (
                <div className=" text-xs text-red-500 ">
                  {props.errors.name}
                </div>
              )}
            </div>

            {/* Email */}
            <div className=" w-full flex flex-col gap-2 ">
              <label className=" font-medium " htmlFor="email">
                Email
              </label>
              <Input
                id="email"
                className=" bg-white "
                type="email"
                placeholder="Enter your email"
                {...props.getFieldProps("email")}
              />
              {props.touched.email && props.errors.email && (
                <div className=" text-xs text-red-500 ">
                  {props.errors.email}
                </div>
              )}
            </div>

            {/* Phone */}
            <div className=" w-full flex flex-col gap-2 ">
              <label className=" font-medium " htmlFor="phone">
                Phone
              </label>
              <Input
                id="phone"
                className=" bg-white "
                type="tel"
                placeholder="Enter your phone number"
                {...props.getFieldProps("phone")}
              />
              {props.touched.phone && props.errors.phone && (
                <div className=" text-xs text-red-500 ">
                  {props.errors.phone}
                </div>
              )}
            </div>

            {/* Message */}
            <div className=" w-full flex flex-col gap-2 ">
              <label className=" font-medium " htmlFor="message">
                Message
              </label>
              <Textarea
                id="message"
                className=" bg-white "
                placeholder="Enter your message"
                {...props.getFieldProps("message")}
              />
              {props.touched.message && props.errors.message && (
                <div className=" text-xs text-red-500 ">
                  {props.errors.message}
                </div>
              )}
            </div>
            <Button
              className=" bg-secondary text-white rounded-full font-bold text-xl py-7 "
              type="submit"
            >
              {props.isSubmitting ? (
                <Loader className=" size-4 animate-spin " />
              ) : (
                "Send Enquiry"
              )}
            </Button>
          </form>
        )}
      </Formik>{" "}
    </div>
  );
};

export default ContactForm;
