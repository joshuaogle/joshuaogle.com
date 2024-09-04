import {summary as VaultSummary} from '../pages/work/vault';
import {summary as StructureSummary} from '../pages/work/structure';
import {summary as SharespostSummary} from '../pages/work/sharespost';
import {summary as ArmadaSummary} from '../pages/work/armada';

const studies = [
  {
    summary: ArmadaSummary,
    href: "/work/armada"
  },
  {
    summary: SharespostSummary,
    href: "/work/sharespost"
  },
  {
    summary: VaultSummary,
    href: "/work/vault"
  },
  {
    summary: StructureSummary,
    href: "/work/structure"
  }
]

export default studies;