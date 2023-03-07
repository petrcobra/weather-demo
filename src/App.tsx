import React, { useState } from 'react';
import styles from './App.module.css';
import Page from './components/layout/pages/page';
import Tabs from './components/layout/tabs/tabs';
import { tabs } from './config/tabs';
import { PageId } from './interfaces';

const App = () => {
  const [page, setPage] = useState<PageId>('main');

  return (
    <div className={styles.app}>
      <Tabs
        tabs={tabs}
        active={page}
        switchTab={setPage}
      />
      <Page active={page}/>
    </div>
  );
}

export default App;
