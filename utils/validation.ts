export const validation = {
  email: (email: string): string | true => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return true;
  },

  password: (password: string): string | true => {
    if (!password) return "Password is required";
    if (password.length < 8)
      return "Password must be at least 8 characters long";
    if (!/(?=.*[a-z])/.test(password))
      return "Password must contain at least one lowercase letter";
    if (!/(?=.*[A-Z])/.test(password))
      return "Password must contain at least one uppercase letter";
    if (!/(?=.*\d)/.test(password))
      return "Password must contain at least one number";
    return true;
  },

  phone: (phone: string): string | true => {
    const phoneRegex = /^\+?[1-9]\d{10,}$/;
    if (!phone) return "Phone number is required";
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
    return true;
  },

  required: (value: string, fieldName: string): string | true => {
    if (!value || value.trim().length === 0) return `${fieldName} is required`;
    return true;
  },
};
