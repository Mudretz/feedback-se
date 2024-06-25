export interface Stages {
    id: string;
    title: string;
    text: string | null;
    button: string | null;
    borderColor: string | null;
    buttonColor: string | null;
    placeholder: string | null;
}
export interface FeedBackProps {
    appId: number;
    isVisible: boolean;
    onClose: () => void;
}
