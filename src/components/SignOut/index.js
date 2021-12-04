export default function SignOut (props) {
    
    console.log("signing out")
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    
}