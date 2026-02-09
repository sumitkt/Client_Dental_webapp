import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function AppointmentForm() {
  const mutation = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-primary/10">
      <h3 className="text-2xl font-bold font-heading text-primary mb-2">Book an Appointment</h3>
      <p className="text-muted-foreground mb-6">Fill out the form below and we'll contact you to confirm.</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="bg-muted/30 border-muted-foreground/20 focus:border-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" {...field} className="bg-muted/30 border-muted-foreground/20 focus:border-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} className="bg-muted/30 border-muted-foreground/20 focus:border-primary" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Required</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                    <FormControl>
                      <SelectTrigger className="bg-muted/30 border-muted-foreground/20 focus:border-primary">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="general">General Consultation</SelectItem>
                      <SelectItem value="cleaning">Teeth Cleaning</SelectItem>
                      <SelectItem value="implants">Dental Implants</SelectItem>
                      <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                      <SelectItem value="orthodontics">Orthodontics (Braces)</SelectItem>
                      <SelectItem value="rct">Root Canal Treatment</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} value={field.value || ""} className="bg-muted/30 border-muted-foreground/20 focus:border-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your dental concern..." 
                    className="resize-none bg-muted/30 border-muted-foreground/20 focus:border-primary min-h-[100px]" 
                    {...field} 
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 text-lg shadow-lg shadow-secondary/20"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Confirm Appointment"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
