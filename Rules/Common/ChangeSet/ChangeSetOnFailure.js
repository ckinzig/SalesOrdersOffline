import CommonLibrary from './../Library/CommonLibrary';

export default function ChangeSetOnFailure(context) {
	CommonLibrary.setOnChangesetFlag(context, false);
}