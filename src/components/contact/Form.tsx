"use client";
import { useState } from "react";
import styles from "./Form.module.scss";
import Button from "../ui/Button/Button";
import arrow from "../../../public/icons/icon-arrow.svg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const newErrors = {
      name: name ? "" : "Can't be empty",
      email: email
        ? emailRegex.test(email)
          ? ""
          : "Invalid email format"
        : "Can't be empty",
      message: message ? "" : "Can't be empty",
    };

    setErrors(newErrors);

    if (!name || !email || !message || !emailRegex.test(email)) {
      setFormData((prevData) => ({
        name: newErrors.name ? "" : prevData.name,
        email: newErrors.email ? "" : prevData.email,
        message: newErrors.message ? "" : prevData.message,
      }));
      return;
    }

    // console.log("Form data:", formData);

    // Clear the form after successful submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  //   console.log("Form data:", Object.fromEntries(formData.entries()));

  return (
    <form onSubmit={handleSubmit} noValidate className={styles.form}>
      <div className={styles.formField}>
        <label htmlFor="name" className={formData.name ? styles.active : ""}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? styles.error : ""}
        />
        {errors.name && (
          <span className={styles.errorText} aria-live="assertive">
            {errors.name}
          </span>
        )}
      </div>
      <div className={styles.formField}>
        <label htmlFor="email" className={formData.email ? styles.active : ""}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.error : ""}
        />
        {errors.email && (
          <span className={styles.errorText} aria-live="assertive">
            {errors.email}
          </span>
        )}
      </div>
      <div className={styles.formField}>
        <label
          htmlFor="message"
          className={formData.message ? styles.active : ""}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? styles.error : ""}
        />
        {errors.message && (
          <span className={styles.errorText} aria-live="assertive">
            {errors.message}
          </span>
        )}
      </div>
      <Button icon={arrow} />
    </form>
  );
}
