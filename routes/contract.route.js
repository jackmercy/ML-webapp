import express from 'express';
import ContractController from '../controllers/contract.controller';

const router = express.Router();

router.route('/voting')
    .get(ContractController.voteforCandidate);

router.route('/votingList')
    .get(ContractController.getVotingList);

router.route('/voteResult')
    .get(ContractController.getCandidateVote);

router.route('/getVoteStatus')
    .get(ContractController.getTransactionReceipt);

export default router;