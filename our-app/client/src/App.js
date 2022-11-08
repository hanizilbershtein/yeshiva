import {
  BrowserRouter,
  BrowserRouter as router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Tests from "./Pages/Tests/Tests";
import EditingQuestions from "./Pages/EditingQuestions/EditingQuestions";
import ConductingTest from "./Pages/ConductingTest/ConductingTest";
import NewEdit from "./Pages/NewEdit/NewEdit";
import TestPrint from "./Pages/TestPrint/TestPrint";
function App() {
  const agdarot=[,"רגיל","הבנה","בהירות","סיכום","חידון","חידודא","פרטים"];
  const agdara= agdarot.map((el) => ({ value: el, label: el }));  
  const masectot = ["שבת", "ברכות", "ראש השנה","זרעים","עירובין","פסחים","שקלים","יומא","סוכה","ביצה","תענית","מגילה","מועד קטן","חגיגה","כתובות","נדרים","נזיר","סוטה","יבמות","גיטין","קידושין","בבא קמא","בבא מציעא","בבא בתרא","סנהדרין","מכות","שבועות","עבודה זרה","זבחים","מנחות","חולין","בכורות","תמורה"];
  const masecet = masectot.map((el) => ({ value: el, label: el }));
  const soogim = ["גפת", "רשי", "גמרשי"];
  const soog = soogim.map((el) => ({ value: el, label: el }));
  const prakim = ["א", "ב", "ג", "ד"];
  const perek = prakim.map((el) => ({ value: el, label: el }));
  const dapim = ["ב", "ג", "ד"];
  const daf = dapim.map((el) => ({ value: el, label: el }));

  const categories = [
    {
      label:"הגדרה",
      select: agdara
    },
    {
      label: "מסכת",
      select: masecet,
    },
    {
      label: "סוג",
      select: soog,
    },
    { label: "פרק", select: perek },
    {
      label: "דף",
      select: daf,
    }

  ];

  
  return (
    <>
 <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/מבחנים" element={<Tests/>} /> 
          <Route path="/מבחנים/עריכת שאלות" element={<EditingQuestions categories={categories}/>} /> 
          <Route path="/מבחנים/עריכת מבחן" element={<ConductingTest />} /> 
          <Route path="/מבחנים/עריכת מבחן/עריכה חדשה" element={<NewEdit categories={categories}/>} /> 
          <Route path="/מבחנים/עריכת מבחן/עריכה חדשה/הדפסת המבחן" element={<TestPrint/>} /> 
        </Routes>
      </BrowserRouter>    </>
  );
}

export default App;
