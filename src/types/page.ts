import { DictionaryKeys } from "@/dictionaries/dictionaries";

export type BasePageProps = {
    params: {
        lang: DictionaryKeys;
    }
}

export type BaseLayoutProps = {
    children: React.ReactNode;
    params: {
        lang: DictionaryKeys;
    }
}