import React from 'react';
import './profilePage.css';
import UserInfo from '../../components/UserInfo';
import AnimationList from '../../components/AnimationList';
import CustomButton from '../../components/customButton/CustomButton';
import colors from '../../constants/colors';
import UserContext from '../../context/UserContext';

class ProfilePage extends React.Component {
	static contextType = UserContext;

	render() {
		return (
			<section id='profile-page'>
				<UserInfo
					username={`${this.context.user_name}`}
					fullname={`${this.context.full_name}`}
				/>
				<div className='buttons-container'>
					<CustomButton
						styles={{ width: 140, fontSize: 17 }}
						color={colors.yellow}>
						Invite
					</CustomButton>
					<CustomButton
						styles={{ width: 140, fontSize: 17 }}
						color={colors.yellow}>
						New Project
					</CustomButton>
				</div>
				<div
					className='animation-container'
					style={{ backgroundColor: colors.yellow }}>
					<div className='animation-title'>
						<p>Animation Title</p>
					</div>
				</div>
				{/* <AnimationList></AnimationList> */}
			</section>
		);
	}
}
export default ProfilePage;
