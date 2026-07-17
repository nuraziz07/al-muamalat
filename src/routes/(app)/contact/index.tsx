import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/contact/')({
  component: ContactPage,
})

function ContactPage() {
    return (
        <div>
            ..
        </div>
    );
}
