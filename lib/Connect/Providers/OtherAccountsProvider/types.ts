// Copyright 2024 @polkadot-cloud/recipes authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type {
  ExternalAccountAddedBy,
  ImportedAccount,
} from "@polkadot-cloud/react/connect/types";
import type { MaybeAddress } from "@polkadot-cloud/react/utils/types";
import type { NetworkName } from "../../Utils";

export interface OtherAccountsContextInterface {
  addExternalAccount: (a: string, addedBy: ExternalAccountAddedBy) => void;
  addOtherAccounts: (a: ImportedAccount[]) => void;
  renameOtherAccount: (a: MaybeAddress, n: string) => void;
  importLocalOtherAccounts: (g: (n: NetworkName) => ImportedAccount[]) => void;
  forgetOtherAccounts: (a: ImportedAccount[]) => void;
  forgetExternalAccounts: (a: ImportedAccount[]) => void;
  accountsInitialised: boolean;
  otherAccounts: ImportedAccount[];
}
