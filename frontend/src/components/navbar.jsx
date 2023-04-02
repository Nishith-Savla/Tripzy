import React, { useContext, useEffect } from "react";
import trpizyLogo from "../assets/logo/tripzy.png";
import { AuthContext } from "../context/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../firebase/firebase";
function Navbar() {
	const { user, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (!user && !loading) {
			navigate("/signin");
		}
	}, [user]);

	const Display = (props) => {
		if (user) {
			return (
				<button
					type="button"
					style={{
						padding: "5px 20px",
						color: "#000",
						backgroundColor: "#f1a90d",
						height: "50px",
						fontSize: "24px",
						marginTop: "5px",
						marginLeft: "10px",
					}}
					onClick={() => {
						logOut();
					}}
				>
					Logout
				</button>
			);
		}
	};
	return (
		<header className="d-flex align-items-center g-3">
			<img src={trpizyLogo} width="60px" alt="" />
			<h1 className="secondary-font page-title larger-2">Tripzy</h1>

			<ul
				className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly"
				style={{ flexDirection: "row", width: "20%" }}
			>
				<li className="nav-item">
					<NavLink className="nav-link active" aria-current="page" to="/">
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="">
						Link
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="">
						Link
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="">
						Link
					</NavLink>
				</li>
			</ul>

			<form className="d-flex">
				<input
					className="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					style={{ width: "500px", margin: "10px 30px 0px 10px" }}
				/>
				<button
					style={{
						padding: "5px 20px",
						color: "#fff",
						backgroundColor: "#002B5B",
						height: "50px",
						fontSize: "24px",
						marginTop: "5px",
					}}
					type="submit"
				>
					Search
				</button>
				<Display />
			</form>
		</header>
	);
}

export default Navbar;
