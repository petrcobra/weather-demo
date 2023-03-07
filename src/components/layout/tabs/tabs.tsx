import { ITab, ITabs } from '../../../interfaces';
import Tab from './tab';

const Tabs = ({tabs, active, switchTab}: ITabs) => {
    return (
        <>
            {tabs.map((tab: ITab) => (
                <Tab
                    key={tab.id}
                    id={tab.id}
                    active={active === tab.id}
                    text={tab.text}
                    onClick={() => switchTab(tab.id)}
                />
            ))}
        </>
    )
};

export default Tabs;