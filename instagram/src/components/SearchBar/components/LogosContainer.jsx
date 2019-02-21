import React from "react";
import styled from "styled-components";

export default function LogosContainer(props) {
	return (
		<LogoHeader>
			<LogoImage>
				<img src="/assets/instagram-logo.png" alt="instagram logo" />
			</LogoImage>
			<LogoName>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
					alt="instagram name logo"
				/>
			</LogoName>
		</LogoHeader>
	);
}

const LogoHeader = styled.div`
	width: 20%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LogoImage = styled.div`
	width: 25%;
	cursor: pointer;
	img {
		width: 100%;
	}
}
`;

const LogoName = styled.div`
	width: 65%;
	cursor: pointer;
	img {
		width: 100%;
	}
}
`;
