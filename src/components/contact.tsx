import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { toast } from "sonner";
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Instagram,
  X
} from "lucide-react";
import { SocialLink } from "@/types";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:diwakar.active@gmail.com",
    icon: <Mail className="h-5 w-5" />
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/919137438718",
    icon: <Phone className="h-5 w-5" />
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mrdiwakar1/",
    icon: <Linkedin className="h-5 w-5" />
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_mrdiwakar/?hl=en",
    icon: <Instagram className="h-5 w-5" />
  }
];

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  // Updated onSubmit to send form data to Formspree
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Replace "your-form-id" with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/mnnpbjze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding min-h-screen py-16 bg-gradient-to-br from-green-50 via-purple-50 to-indigo-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you. Feel free to reach out using the form below
            or through any of my social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8 animate-fade-in text-center lg:text-left" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Contact Information</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Feel free to reach out with any questions, project inquiries, or
                just to say hello. I'm always open to discussing new opportunities and ideas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:bg-blue-50/50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                    {link.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{link.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate max-w-[180px] sm:max-w-none">
                      {link.name === "Email"
                        ? "diwakar.active@gmail.com"
                        : link.name === "WhatsApp"
                          ? "+91 9137438718"
                          : link.name === "LinkedIn"
                            ? "linkedin.com/in/mrdiwakar1"
                            : link.name === "Instagram"
                              ? "@_mrdiwakar"
                              : ""}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Subject of your message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write your message here..."
                            className="resize-none min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;