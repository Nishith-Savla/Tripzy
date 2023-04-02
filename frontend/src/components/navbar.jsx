import React, { useContext, useEffect } from "react";
import trpizyLogo from "../assets/logo/tripzy.png";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
function Navbar() {
	const { user, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (!user && !loading) {
			navigate("/signin");
		}
	}, [user]);

	return (
		<header className="d-flex align-items-center g-3">
			<img src={trpizyLogo} width="60px" alt="" />
			<h1 className="secondary-font page-title larger-2">Tripzy</h1>
		</header>
	);
}

export default Navbar;
