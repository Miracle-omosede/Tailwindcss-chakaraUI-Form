"use client";

import { useState } from "react";

import { FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

const initValues = { name: "", subject: "", message: "", email: "" };

const initState = { values: initValues };

export default function Home() {
  const [state, setState] = useState(initState)
  return (
    <div className="p-10">
      <Heading className="font-poppins py-10">Contact</Heading>

      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" name="Name" />
      </FormControl>
    </div>
  );
}
