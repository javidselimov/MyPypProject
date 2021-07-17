interface Iload {
	type: 'load_youtube';
}
interface ISuccess {
	type: 'success_youtube';
	payload: YoutubeTypes;
}

export type YoutubeTypes = {
	items: Iitem[];
};
export type Iitem = {
	kind: string;
	etag: string;
	id: {
		kind: string;
		videoId: string;
	};
	snippet: {
		publishedAt: string;
		channelId: string;
		title: string;
		description: string;
		thumbnails: {
			default: {
				url: string;
				width: number;
				height: number;
			};
			medium: {
				url: string;
				width: number;
				height: number;
			};
			high: {
				url: string;
				width: number;
				height: number;
			};
		};
		channelTitle: number;
		liveBroadcastContent: number;
		publishTime: number;
	};
};

export type ActionYoutubeTypes = Iload | ISuccess;
