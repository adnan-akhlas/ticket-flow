1. **JSX (JavaScript XML):**
   JSX is a syntax extension that lets you write HTML-like structures directly inside your JavaScript code. It is used because it makes the UI structure much easier for humans to read and write compared to using raw JavaScript logic. Under the hood, React takes this JSX and compiles it into standard `React.createElement()` calls that the browser can actually understand.

---

2. **State vs. Props:**
   Think of **props** as external configuration or "genes" passed from a parent component to a child; they are read-only and cannot be changed by the component receiving them. **State**, on the other hand, is the component’s internal memory—it is managed entirely within the component and can be updated as needed to reflect user interactions or data changes.

---

3. **The `useState` Hook:**
   The `useState` hook is the primary tool used to add state to functional components. When you call it, it returns an array containing two items: the current state value and a "setter" function used to update that value. For example, `const [tickets, setTickets] = useState([])` initializes an empty list that you can update later by calling `setTickets`.

---

4. **Sharing State Between Components:**
   The most common way to share data is "lifting state up," which involves moving the state to the closest common parent of the components that need it. For global data that many different components need (like a user's login status), the **Context API** is used to avoid "prop drilling". In very large or complex applications, developers often use dedicated libraries like Redux to manage state centrally.

---

5. **Event Handling in React:**
   React handles events like clicks or form submissions using a camelCase naming convention, such as `onClick` instead of the traditional HTML `onclick`. Instead of passing a string of code, you pass an actual JavaScript function to the event handler, allowing the component to execute specific logic when the user interacts with the UI.
