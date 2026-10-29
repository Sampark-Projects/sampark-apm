import { useCallback } from 'react';
import { Button } from '@signozhq/ui/button';
import { LifeBuoy } from '@signozhq/icons';

import { useIsDarkMode } from 'hooks/useDarkMode';

import samparkDarkLogoUrl from '@/assets/samprk-logo-dark.png';
import samparkWhiteLogoUrl from '@/assets/samprk-logo-white.png';

import './AuthHeader.styles.scss';

function AuthHeader(): JSX.Element {
	const isDarkMode = useIsDarkMode();
	const signozBrandLogoUrl = isDarkMode ? samparkWhiteLogoUrl : samparkDarkLogoUrl;

	const handleGetHelp = useCallback((): void => {
		window.open('https://samparksoftwares.com/contact-us/', '_blank');
	}, []);

	return (
		<header className="auth-header">
			<div className="auth-header-logo">
				<img
					src={signozBrandLogoUrl}
					alt="SigNoz"
					className="auth-header-logo-icon"
				/>
				{/* <span className="auth-header-logo-text">SigNoz</span> */}
			</div>
			<Button
				size="md"
				prefix={<LifeBuoy size={12} />}
				onClick={handleGetHelp}
				variant="solid"
				color="secondary"
			>
				Get Help
			</Button>
		</header>
	);
}

export default AuthHeader;
