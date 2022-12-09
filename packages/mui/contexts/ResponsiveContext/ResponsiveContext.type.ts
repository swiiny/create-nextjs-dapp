interface IFrames {
	width: number;
	height: number;
}

interface IUseResponsive {
	screenFrames?: IFrames;
	isBiggerThanSm?: boolean;
	isBiggerThanMd?: boolean;
	isBiggerThanLg?: boolean;
	isBiggerThanXl?: boolean;
}

export type { IUseResponsive, IFrames };
