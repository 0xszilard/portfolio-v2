"use client";

import { useState } from "react";
import {
  PopoverForm,
  PopoverFormButton,
  PopoverFormCutOutLeftIcon,
  PopoverFormCutOutRightIcon,
  PopoverFormSeparator,
  PopoverFormSuccess,
} from "@/components/ui/popover-form";

export function ContactFormExample() {
  const [formState, setFormState] = useState("idle");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function submit() {
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
    }, 1500);

    setTimeout(() => {
      setOpen(false);
      setFormState("idle");
      setName("");
      setEmail("");
      setMessage("");
    }, 3300);
  }

  return (
    <div className="flex w-full items-center justify-center">
      <PopoverForm
        title="Click Here"
        open={open}
        setOpen={setOpen}
        width="364px"
        height="372px"
        showCloseButton={formState !== "success"}
        showSuccess={formState === "success"}
        openChild={
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!name || !email || !message) return;
              submit();
            }}
            className="space-y-4"
          >
            <div className="px-4 pt-4">
              <label
                htmlFor="name"
                className="text-muted-foreground mb-1 block text-sm font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="focus:ring-primary focus:border-primary w-full rounded-md border bg-white px-3 py-2 shadow-sm focus:outline-none dark:bg-black"
                required
              />
            </div>
            <div className="px-4">
              <label
                htmlFor="email"
                className="text-muted-foreground mb-1 block text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring-primary focus:border-primary w-full rounded-md border bg-white px-3 py-2 shadow-sm focus:outline-none dark:bg-black"
                required
              />
            </div>
            <div className="px-4">
              <label
                htmlFor="message"
                className="text-muted-foreground mb-1 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="focus:ring-primary focus:border-primary w-full rounded-md border bg-white px-3 py-2 shadow-sm focus:outline-none dark:bg-black"
                rows={3}
                required
              />
            </div>
            <div className="relative flex h-12 items-center px-[10px]">
              <PopoverFormSeparator />
              <div className="absolute top-0 left-0 -translate-x-[1.5px] -translate-y-1/2">
                <PopoverFormCutOutLeftIcon />
              </div>
              <div className="absolute top-0 right-0 translate-x-[1.5px] -translate-y-1/2 rotate-180">
                <PopoverFormCutOutRightIcon />
              </div>
              <PopoverFormButton
                loading={formState === "loading"}
                text="Submit"
              />
            </div>
          </form>
        }
        successChild={
          <PopoverFormSuccess
            title="Message Sent"
            description="Thank you for contacting us. We'll get back to you soon!"
          />
        }
      />
    </div>
  );
}
