export type VersionHistoryItem = {
    date: string;
    url: string;
    packages: Array<{
        name: string;
        version: string;
    }>;
};

// Ordered newest to oldest. Keep this list in sync with deployed vN snapshot folders.
export const versionHistory: VersionHistoryItem[] = [
    {
        date: 'September 2026',
        url: '',
        packages: [
            { name: '@brightlayer-ui/react-native-components', version: '9.3.0' },
            { name: '@brightlayer-ui/react-native-themes', version: '8.1.1' },
            { name: '@brightlayer-ui/react-native-progress-icons', version: '2.2.2' },
            { name: '@brightlayer-ui/react-native-auth-workflow', version: '8.3.1' },
        ],
    },
];
