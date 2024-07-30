"use client";
import { useState } from "react";
import { FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
const initValues = { name: "", subject: "", message: "", email: "" };
const initState = { values: initValues };
export default function Home() {
  const [state, setState] = useState(initState);
  const { values } = state;
  const handleChange = ({ target }) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value
    }
  }));


  
  return (
    <div className="p-10 w-full flex items-center justify-center flex-col">
      <Heading className="font-poppins py-10">Contact</Heading>

      <FormControl isRequired isInvalid={!values.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="name" onChange={handleChange} errorBorderColor="red.300" value={values.name} />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!values.email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input type="text" name="email" onChange={handleChange} errorBorderColor="red.300" value={values.email} />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!values.subject} mb={5}>
        <FormLabel>Subject</FormLabel>
        <Input type="text" name="subject" onChange={handleChange} errorBorderColor="red.300" value={values.subject} />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!values.message} mb={5}>
        <FormLabel>Message</FormLabel>
        <Textarea name="message" onChange={handleChange} errorBorderColor="red.300" value={values.message} rows="4" />
        <FormErrorMessage>Required Field</FormErrorMessage>
      </FormControl>
    </div>
  );
}
