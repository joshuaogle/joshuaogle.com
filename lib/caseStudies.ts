import {summary as TransparentSessionsSummary} from '../pages/work/boundary-transparent-sessions';
import {summary as BoundarySummary} from '../pages/work/boundary-session-recording';
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
    summary: StructureSummary,
    href: "/work/structure"
  },
  {
    summary: VaultSummary,
    href: "/work/vault"
  },
  {
    summary: BoundarySummary,
    href: "/work/boundary-session-recording"
  },
  {
    summary: TransparentSessionsSummary,
    href: "/work/boundary-transparent-sessions"
  }
]

export default studies;