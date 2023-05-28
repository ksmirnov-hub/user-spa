import React  from 'react';
import { connect } from "react-redux";
import ContentWrapper from "../components/contentWrapper";

function Home({
	profile,
}) {
	const profileName =  profile.name ? `, ${profile.name}` : ''; 
	return (
		<ContentWrapper>
			<div className="w-[700px] h-full mx-[30%]">
				<div className="my-[150px] h-auto font-bold border-solid border-black text-[24px]">
					<div>{`Здравствуйте${profileName}`}</div>
					<div> Вы находитесь на странице профиля</div>
				</div>
			</div>
		</ContentWrapper>
	);
}

const mapStateToProps = state => {
	return {
		profile: state.auth.profile,
		justMoved: state.auth.justMoved,
	};
}

export default connect(mapStateToProps, {})(Home);