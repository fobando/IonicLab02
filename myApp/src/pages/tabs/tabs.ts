import { Component } from '@angular/core';

import { TransactionsPage } from '../transactions/transactions';
import { LogoffPage } from '../logoff/logoff';
import { OperationsPage } from '../operations/operations';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OperationsPage;
  tab2Root = TransactionsPage;
  tab3Root = LogoffPage;

  constructor() {

  }
}
