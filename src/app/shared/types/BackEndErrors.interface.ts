export interface BackEndErrors{
    name: string;
    status: Number;
    messages: string[];
}

// {
//     "name": "ValidationException",
//     "status": 400,
//     "messages": [
//       "The length of 'User Name' must be at least 5 characters. You entered 1 characters.",
//       "'Email' is not a valid email address."
//     ]
//   }