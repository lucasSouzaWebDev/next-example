import Navbar from "../components/Navbar";

export default function Start() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',
        }}>
            <Navbar to="/styled" label="styled" />
            <Navbar to="/example" label="example" color="#2cbb1f" />
            <Navbar to="/jsx" label="jsx" color="crimson" />
        </div>
    )
}