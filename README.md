🧮 Age Calculator – JavaScript Project

This is a simple and interactive Age Calculator built using HTML, CSS, and JavaScript.
The user selects their Date of Birth, and the application calculates their exact age in Years, Months, and Days.

🚀 Features

📅 User selects DOB using a calendar input

🔒 Past date validation (future dates disabled automatically)

🧮 Accurate age calculation with proper handling of:

Negative months

Negative days

Leap year correction

⚠️ Error shown if no date is selected

💎 Modern glassmorphism UI with responsive design

🖱️ Single button click to calculate age

🛠️ Tech Stack
Technology	Usage
HTML	Layout & Input
CSS	Styling (Glass Effect + Responsive Design)
JavaScript	Date logic & age calculation
📐 Logic Overview (Without Code)

User selects a DOB.

Get today's date using JavaScript.

Subtract:

Years

Months

Days

If days < 0 → Take days from previous month.

If months < 0 → Adjust by borrowing from year (add +12 months).

Display the final age in format:
XX Years, YY Months, ZZ Days

📱 Responsive Behavior

On mobile screens, input and button appear one below the other.

On larger screens, both elements appear side by side.

🎨 Design Highlights

Gradient background

Glassmorphism effect using backdrop-filter: blur()

Smooth button hover animations

Clean and modern typography using Poppins font

🔮 Future Enhancements (Optional)

🎉 Add “Happy Birthday” pop-up if today matches DOB

🔁 Auto-reset input after calculation

💾 Local storage save for previous calculation

🌍 Add support for different age formats (Weeks, Hours, Seconds)

📸 Project Preview (Write after adding screenshot)
![Preview Image](screenshot.png)

🤝 Contributing

Feel free to fork this project and enhance it. Pull requests are welcome!

📄 License

This project is open-source and available under the MIT License.

👤 Author

Parth Kathale
"Learning & building one project at a time!"
