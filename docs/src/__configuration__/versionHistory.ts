export type VersionHistoryItem = {
    date: string;
    url: string;
    packages: Array<{
        name: string;
        version: string;
    }>;
};
