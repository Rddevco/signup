// // Simulating a signup handler (this would typically be connected to a database)
// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       const {  email, password,confirmpassword } = req.body;
  
//       // Perform server-side validation
//       if ( !email || !password  ) {
//         return res.status(400).json({ message: 'All fields are required.' });
//       }
  
      
//       return res.status(200).json({ message: 'Signup successful!' });
//     } else {
//       return res.status(405).json({ message: 'Method Not Allowed' });
//     }
//   }
  